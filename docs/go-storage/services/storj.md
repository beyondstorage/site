[STORJ(Decentralized Cloud Storage)](https://www.storj.io)

## Project

<https://github.com/beyondstorage/go-service-storj>

## Config

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](go-storage/pairs/credential.md) | Y | credential |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |

#### Examples

Init storager (see [this page](go-storage/operations/index.md#how-to-initialize-a-servicerstorager) for details)


```go
import (
	"log"

	_ "github.com/beyondstorage/go-service-storj"
	"github.com/beyondstorage/go-storage/v4/services"
)

func main() {
	store, err := services.NewStoragerFromString("storj://bucket_name/path/to/workdir")
	if err != nil {
		log.Fatal(err)
	}
	
	// Write data from io.Reader into hello.txt
	n, err := store.Write("hello.txt", r, length)
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)