---
title: Introduction
sidebar_position: 1
---

A **vendor-neutral** storage library for Golang.

## Vision

**Write once, run on every storage service.**

## Goal

- Production ready
- High performance
- Vendor agnostic

## Quick Start

```go
package main

import (
	"log"

	"go.beyondstorage.io/v5/services"
	"go.beyondstorage.io/v5/types"

	// Add s3 support
	_ "go.beyondstorage.io/services/s3/v2"
)

func main() {
	// Init a Storager from connection string. 
	store, err := services.NewStoragerFromString("s3://bucket_name/path/to/workdir")
	if err != nil {
		log.Fatalf("service init failed: %v", err)
	}

	// Write data from io.Reader into hello.txt
	n, err := store.Write("hello.txt", r, length)

	// Read data from hello.txt to io.Writer
	n, err := store.Read("hello.txt", w)

	// Stat hello.txt to check existence or get its metadata
	o, err := store.Stat("hello.txt")

	// Use object's functions to get metadata
	length, ok := o.GetContentLength()

	// List will create an iterator of object under path.
	it, err := store.List("path")

	for {
		// Use iterator.Next to retrieve next object until we meet IteratorDone.
		o, err := it.Next()
		if errors.Is(err, types.IteraoorDone) {
			break
		}
	}

	// Delete hello.txt
	err = store.Delete("hello.txt")
}
```

## Examples

All examples are maintained in <https://github.com/beyondstorage/go-storage-example>.

## Sponsor

<a href="https://vercel.com?utm_source=beyondstorage&utm_campaign=oss">
    <img src="/img/vercel_logo_dark.svg" />
</a>

