---
title: Introduction
---

`Multiparter` is used to maintain multipart object.

## Workflow

- Use [create_multipart](./create_multipart.md) to create a multipart object.
- Use [write_multipart](./write_multipart.md) to write data into parts.
- Use [list_multipart](./list_multipart.md) to list parts in the object.
- Use [combine_multipart](./combine_multipart.md) to construct a valid object with parts.

## Behavior

- The object CANNOT be accessible before `complete_multipart`.