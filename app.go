package hello

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

func init() {
	http.Handle("/", http.FileServer(http.Dir("./")))
	http.HandleFunc("/list", list)
	http.HandleFunc("/chore", addChore)
}

type Chore struct {
	Name   string `json:"name"`
	Points int64  `json:"points"`
}

func addChore(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)
	points, _ := strconv.ParseInt(r.FormValue("points"), 0, 64)
	newChore := Chore{
		Name:   r.FormValue("name"),
		Points: points,
	}

	key := datastore.NewIncompleteKey(c, "Chore", guestbookKey(c))
	_, err := datastore.Put(c, key, &newChore)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	http.Redirect(w, r, "/", http.StatusFound)
}

// guestbookKey returns the key used for all guestbook entries.
func guestbookKey(c appengine.Context) *datastore.Key {
	// The string "default_guestbook" here could be varied to have multiple guestbooks.
	return datastore.NewKey(c, "Guestbook", "default_guestbook", 0, nil)
}

func list(w http.ResponseWriter, r *http.Request) {

	c := appengine.NewContext(r)
	// Ancestor queries, as shown here, are strongly consistent with the High
	// Replication Datastore. Queries that span entity groups are eventually
	// consistent. If we omitted the .Ancestor from this query there would be
	// a slight chance that Greeting that had just been written would not
	// show up in a query.
	q := datastore.NewQuery("Chore").Ancestor(guestbookKey(c)).Limit(50)
	chores := make([]Chore, 0, 50)
	if _, err := q.GetAll(c, &chores); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	b, err := json.Marshal(chores)
	if err != nil {
		fmt.Println("error:", err)
	}
	fmt.Fprint(w, string(b))
}
