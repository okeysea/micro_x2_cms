package testenum

type MemberType int

const (
  _ MemberType = iota
  Human
  Beast
  Elf
)

func (t MemberType) String() string {
  switch t {
  case Human:
    return "Ningen"
  case Beast:
    return "Be-suto"
  case Elf:
    return "eruhu"
  case 0:
    panic("unknown")
  }
  panic("unknown value")
}
