[Azure Blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/)

## Project

<https://go.beyondstorage.io/services/azblob>

## Config

### Servicer

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](../pairs/credential.md) | Y | only support `hmac` protocol |
| [endpoint](../pairs/endpoint.md) | Y | endpoint provided by azure |

#### Examples

Init servicer (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "go.beyondstorage.io/services/azblob/v3"
	"go.beyondstorage.io/v5/services"
)

srv, err := services.NewServicerFromString("azblob://?credential=hmac:<account_name>:<account_key>&endpoint=https:<account_name>.<endpoint_suffix>")
if err != nil {
    log.Fatalf("azblob new service: %v", err)
}
```

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](../pairs/name.md) | Y | bucket name |
| [work_dir](../pairs/work_dir.md) | N | work dir |

#### Examples

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
	_ "go.beyondstorage.io/services/azblob/v3"
	"go.beyondstorage.io/v5/services"
)

store, err := services.NewStoragerFromString("azblob://<container_name>/<work_dir>?credential=hmac:<account_name>:<account_key>&endpoint=https:<account_name>.<endpoint_suffix>")
if err != nil {
    log.Fatalf("azblob new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)

- [Appender](../operations/appender/index.md)

## Pairs

### Server-Side Encryption (SSE)

Azure Blob storage supports three options for Server-Side Encryption:

- Microsoft-managed keys: This is default behaviour, needs no configuration.
- Customer-managed keys: Configure customer-managed keys for the storage account, and then data will always be protected.
- Customer-provided keys

Refer to https://docs.microsoft.com/en-us/azure/storage/common/storage-service-encryption for more details.

#### Customer-provided keys

| Name               | Comments                                                     |
| ------------------ | ------------------------------------------------------------ |
| `encryption_key`   | the 32-byte customer-provided AES256 key                     |
| `encryption_scope` | Specifies the name of the encryption scope. See https://docs.microsoft.com/en-us/azure/storage/blobs/encryption-scope-overview for details. |

##### Supported Operations

- [Read](../operations/storager/read.md)
- [Stat](../operations/storager/stat.md)
- [Write](../operations/storager/write.md)
- [CreateAppend](../operations/appender/create_append.md)
- [WriteAppend](../operations/appender/write_append.md)
