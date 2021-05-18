package util

import (
  "os"
)

type EnvUtilFuncs interface {
  Get(key string, fallback string) string
}

var Env EnvUtilFuncs = envUtilFuncs{}

type envUtilFuncs struct {}

func (u envUtilFuncs) Get(key string, fallback string) string {
  if value, ok := os.LookupEnv( key ); ok {
    return value
  }
  return fallback
}
