# sign

BeyondCTL support get the signed URL by the source object.

```
NAME:
   byctl sign - get the signed URL by the source

USAGE:
   byctl sign [command options] [source]

OPTIONS:
   --config FILE, -c FILE  Load config from FILE (default: "/root/.config/byctl/config.toml") [$BEYOND_CTL_CONFIG]
   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --expire value          the number of seconds until the signed URL expires (default: 300)
   --help, -h              show help (default: false)
```

For example:

```
byctl sign example:/test.mp4
```

## Sign with expire

By default, the created `URL` expires in `300` seconds. If we want to specify the expire time, we can use flag `--expire`.

```
byctl sign --expire=150 example:/test.mp4
```

This command changes the expire time to 150 seconds.

## Control concurrency via Workers

BeyondCTL support concurrency sign be default. We can control the concurrent workers by `--workers`.

By default, we will have `4` workers.

We can increase the workers number to `10` via:

```shell
byctl sign --workers=10 example:/test.mp4
```
