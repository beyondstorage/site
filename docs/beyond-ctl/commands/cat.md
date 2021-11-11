# cat

BeyondCTL support pipe data from storage services into stdout.

```
NAME:
   byctl cat - pipe data from storage services into stdout

USAGE:
   byctl cat [command options] [source]

OPTIONS:
   --config FILE, -c FILE  Load config from FILE (default: "/root/.config/byctl/config.toml") [$BEYOND_CTL_CONFIG]
   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --help, -h              show help (default: false)
```

For example:

```
byctl cat example:testCat
```

## Use with BeyondCTL's tee

The `cat` command can also be used with the `tee` command, for example:

```
byctl cat example:testCat | byctl tee another:testCat
```

Executing the above command will upload the contents of the file `testCat` in service `example` to the file `testCat` in service `another`.

## Control concurrency via Workers

BeyondCTL support concurrency cat be default. We can control the concurrent workers by `--workers`.

By default, we will have `4` workers.

We can increase the workers number to `10` via:

```shell
byctl cat --workers=10 example:testCat
```
