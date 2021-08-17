---
title: Migrate Reacher to HttpSigner
---

## Introduction

### Reacher

[Reacher](../operations/reach.md) is used to get a public accessible url to object.

### HttpSigner

[HttpSigner](../operations/httpsigner.md) is used to generate HTTP requests with signature information.

For `http.Request` returned by `QuerySignHttp`, where the `URL` field specifies either the URI being requested (for server requests) or the URL to access (for client requests).

Obviously, `HttpSigner` supports more request methods, including but not limited to get the accessible url to object.

With the introduction of `HttpSigner`, we will deprecate `Reacher`.

## How to migrate Reacher to HttpSigner

From [go-storage](https://github.com/beyondstorage/go-storage) side:

- `Reacher` interface and operation should be marked as deprecated.
- Remove `Reacher` interface in last major version(v5.0.0?).

From service side:

- `Reacher` implementation should be marked as deprecated and `HttpSigner` should be implemented.
- Remove `Reacher` implementation in last major version.
- `Reacher` implementation should be removed before it's removed from [go-storage](https://github.com/beyondstorage/go-storage).

From user side:

`Reacher` interface and `Reach` operation are no longer available in the near future. To reach the object or resource, upgrade the dependency library `go-service-*` is needed, use `HttpSigner` interface and `QuerySignHttp` operation instead. For example:

Before
```go
// ...
url, err := store.Reach("abc", types.WithExpire(time.Hour))
// handle err and url
```

After
```go
// ...
req, err := store.QuerySignHttp(types.OpRead, "abc", time.Hour)
// handle err
// get the accessible url to object
url := req.URL.String()
// or send request directly
client := &http.Client{}
resp, err := client.Do(req)
```
