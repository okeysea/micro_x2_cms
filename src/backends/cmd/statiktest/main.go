package main

import (
  "fmt"
  "log"
  "io"
  "github.com/rakyll/statik/fs"
  _ "okeysea/micro_x2_cms/pkg/statik"
)


func main() {
  statikFS, err := fs.New()
  if err != nil {
    log.Fatal(err)
  }

  r, err := statikFS.Open("/sql/test.sql")
  if err != nil {
    log.Fatal(err)
  }
  defer r.Close()
  
  contents, err := io.ReadAll(r)
  if err != nil {
    log.Fatal(err)
  }

  fmt.Println(string(contents))
}
