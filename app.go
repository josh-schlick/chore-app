package hello

import (
    "fmt"
    "html/template"
    "net/http"
)

func init() {
    http.Handle("/", http.FileServer(http.Dir("./")))
    http.HandleFunc("/list", list)
}

type Chore struct {
	Name string
	Points int
}

func list(w http.ResponseWriter, r *http.Request) {
	content := "hi"
	fmt.Fprint(w, content)
}
