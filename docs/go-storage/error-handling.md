---
title: Handling Errors in go-storage
---


## Example 

```go 
import (
	s3 "github.com/aos-dev/go-service-s3"
	"github.com/aos-dev/go-storage/v3/services"
	"github.com/aos-dev/go-storage/v3/types"
)

// ...

store, err := services.NewStorager("s3", 
	pairs.WithCredential(os.Getenv("STORAGE_S3_CREDENTIAL")),
	pairs.WithEndpoint(os.Getenv("STORAGE_S3_ENDPOINT")),
	// ...
)
if err != nil {
	if errors.Is(initErr, services.ErrServiceNotRegistered) {
		// handle ErrServiceNotRegistered
		return
	}
	// handle error
	return
}

n, err := store.Read(path, &buf)
if err != nil {
	if errors.Is(err, services.ErrObjectNotExist) {
		// handle ErrObjectNotExist
		return
	}
	if errors.Is(err, s3.ErrServerSideEncryptionCustomerKeyInvalid) {
		// handle ErrServerSideEncryptionCustomerKeyInvalid
		return
	}
	if errors.Is(err, services.ErrRestrictionDissatisfied) {
		var e services.MetadataUnrecognizedError
		if errors.As(err, &e) {
			// handle MetadataUnrecognizedError
			return
		}
		// handle ErrRestrictionDissatisfied
		return
	}
	// handle error
	return
}
```
