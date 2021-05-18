package main

import (
  // "database/sql"
  "fmt"
  "log"

  "okeysea/micro_x2_cms/pkg/util"
  membertype "okeysea/micro_x2_cms/pkg/testenum"

  _ "github.com/go-sql-driver/mysql"
  "github.com/jmoiron/sqlx"
)

const dbPath = "./db.sql"

const initQuery = `
DROP TABLE IF EXISTS members;
CREATE TABLE members (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAE(20) DEFAULT '',
  type INTEGER DEFAULT NULL -- 1:Human, 2:Beast, 3:Elf
);
INSERT INTO members (name, type) VALUES ("あ", 1);
INSERT INTO members (name, type) VALUES ("i",  2);
INSERT INTO members (name, type) VALUES ("u",  3);
`

type Member struct {
  ID    int                   `db:"id"`
  Name  string                `db:"name"`
  Type  membertype.MemberType `db:"type"`
}

func main () {
  fmt.Println( util.Env.Get("MYSQL_HOST", "default") )
  db, err := sqlx.Connect("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?%s")
  if err != nil {
    log.Fatalln( err )
  }

  db.MustExec( initQuery )

  chris := &Member{
    Name: "chris",
    Type: membertype.Human,
  }

  transaction := db.MustBegin()
  transaction.NamedExec("INSERT INTO members (name, type) VALUES (:name, :type)", chris)
  transaction.Commit()

  members := []Member{}
  err = db.Select(&members, "SELECT id, name, type FROM members")
  if err != nil {
    log.Fatalln( err )
  }

  for _, member := range members {
    fmt.Println( member.ID, member.Name, member.Type )
  }
}

