[InterPlanetary File System(IPFS)](https://ipfs.io/)

## Project

<https://go.beyondstorage.io/services/ipfs>

## Config

### Storager

#### Available Pairs

| Name                             | Required | Comments |
| -------------------------------- | -------- | -------- |
| [endpoint](../pairs/endpoint.md) | Y        | endpoint |
| gateway                          | Y        | gateway  |
| [work_dir](../pairs/work_dir.md) | N        | work dir |

#### 示例

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "go.beyondstorage.io/services/ipfs"
    "go.beyondstorage.io/v5/services"
)

store, err := services.NewStoragerFromString("ipfs:///<work_dir>?endpoint=<ipfs_http_api_endpoint>&gateway=<ipfs_http_gateway>") // endpoint example: http:127.0.0.1:5001
if err != nil {
    log.Fatalf("ipfs new service: %v", err)
}

```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)

- [Copier](../operations/copy.md)

- [Mover](../operations/move.md)

- [QuerySignHTTPRead](../operations/storage_http_signer/query_sign_http_read.md)
