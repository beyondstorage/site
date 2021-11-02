[qiniu kodo](https://www.qiniu.com/products/kodo)

## Project

<https://go.beyondstorage.io/services/kodo>

## Config

### Servicer

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](../pairs/credential.md) | Y | only support `hmac` protocol |

#### Examples

Init servicer (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "go.beyondstorage.io/services/kodo/v3"
	"go.beyondstorage.io/v5/services"
)

srv, err := services.NewServicerFromString("kodo://?credential=hmac:<account_name>:<account_key>")
if err != nil {
    log.Fatalf("cos new service: %v", err)
}
```

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](../pairs/name.md) | Y | bucket name |
| [work_dir](../pairs/work_dir.md) | N | work dir |
| [endpoint](../pairs/endpoint.md) | Y | specific domain to access this storager |

#### Examples

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "go.beyondstorage.io/services/kodo/v3"
	"go.beyondstorage.io/v5/services"
)

store, err := services.NewStoragerFromString("kodo://<container_name>/<work_dir>?credential=hmac:<account_name>:<account_key>&endpoint=http:<domain>")
if err != nil {
    log.Fatalf("kodo new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)
