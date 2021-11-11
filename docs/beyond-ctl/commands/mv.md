# mv

BeyondCTL support move file from source storager to target storager.

```
NAME:
   byctl mv - move file from source storager to target storager

USAGE:
   byctl mv [command options] [source] [target]

OPTIONS:
   --config FILE, -c FILE       Load config from FILE (default: "/root/.config/byctl/config.toml") [$BEYOND_CTL_CONFIG]
   --workers value              Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --read-speed-limit value     Specify speed limit for read I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_READ_SPEED_LIMIT]
   --write-speed-limit value    Specify speed limit for write I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_WRITE_SPEED_LIMIT]
   --multipart-threshold value  Specify multipart threshold. If source file size is larger than this value, byctl will use multipart method to move file. (default: "1GiB") [$BEYOND_CTL_MULTIPART_THRESHOLD]
   --recursive, -r, -R          move directories recursively (default: false)
   --help, -h                   show help (default: false)
```

For example:

```
byctl mv test.mp4 example:/test.mp4
```

## Move directory

We can specify the move directory with `--recursive`, `-r` or `-R`.

```
byctl mv -r testDir example:/testDir
```

## Speed up via Multipart

BeyondCTL supports speed up the move procedure via [Multipart](/docs/go-storage/operations/multiparter/index).

By default, BeyondCTL will switch to `multipart` method while the source file is larger than 1 GiB. We can specify the threshold by `--multipart-threshold`:

For example, we can reduce the threshold to `100MiB` to enforce beyondctl use multipart method once file is larger than `100MiB`.

```shell
byctl mv --multipart-threshold=100MiB test.mp4 example:/test.mp4
```

## Speed limit

Sometimes, we don't want beyondctl use too many resources. We can limit the read or write speed via `--read-speed-limit` or `--write-speed-limit`.

For example, we can limit the global read speed to 1 MiB.

```shell
byctl mv --read-speed-limit=1MiB test.mp4 example:/test.mp4
```

## Control concurrency via Workers

BeyondCTL support concurrency mv be default. We can control the concurrent workers by `--workers`.

By default, we will have `4` workers.

We can increase the workers number to `10` via:

```shell
byctl mv --workers=10 test.mp4 example:/test.mp4
```
