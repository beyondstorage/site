# rm

BeyondCTL supports remove files and multipart objects.

```
NAME:
   byctl rm - remove file from storager

USAGE:
   byctl rm [command options] [source]

OPTIONS:
   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --recursive, -r, -R     remove directories and their contents recursively
 (default: false)
   --multipart  remove multipart object (default: false)
   --help, -h   show help (default: false)
```

For example:

```
byctl rm example:/test.mp4
```

## Remove directory

By default, BeyondCTL does not switch to the remove directory, we can specify the remove directory with `--recursive`, `-r` or `-R`. For example:

```
byctl rm -r example:/testDir
```

## Remove multipart object

We can specify the remove multipart object with `--multipart`. For example:

```
byctl rm --multipart example:/multipart
```

This command will remove all multipart objects in service`example` with path `multipart`.

If we want to remove all multipart objects in service`example` with path prefix `multipart`, we can do it like the following command:

```
byctl rm --multipart -r example:/multipart
```

## Control concurrency via Workers

BeyondCTL support concurrency rm be default. We can control the concurrent workers by `--workers`.

By default, we will have `4` workers.

We can increase the workers number to `10` via:

```shell
byctl rm --workers=10 example:/test.mp4
```

