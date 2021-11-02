# stat

BeyondCTL support  get file or storage infos.

```shell
NAME:
   byctl stat - get file or storage info

USAGE:
   byctl stat [command options] [source]

OPTIONS:
   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]
   --json                  Output in json format (default: false)
   --help, -h              show help (default: false)
```

## Stat file

```
byctl stat example:/test.jpg
```

The above command will output the basic information of the file `test.jpg` in service `example`.

```
ID: path/to/workdir/test.jpg
Path: test.jpg
Mode: Read
LastModified: 2021-10-25 09:06:57 +0000 UTC
Etag: "7e4611c52075590896dd26905ac0c4cf"
ContentType: image/jpeg

SystemMetadata: 
StorageClass: STANDARD
xxxxxxxxx: xxx

UserMetadata: 
xxxx: xxxx
xxx: xxx  
```

If we need json output, we can do this:

```
byctl stat --json example:/test.jpg
```

## Stat storage

```
byctl stat example:
```

The above command will output basic information about the storager of the `example` service(Added via profile, qingstor).

```
Service: qingstor
BucketName: test-stat
WorkDir: /path/to/workdir/
Location: sh1a
```

If we need json output, we can do this:

```
byctl stat --json example:
```

## Control concurrency via Workers

BeyondCTL support concurrency stat be default. We can control the concurrent workers by `--workers`.

By default, we will have `4` workers.

We can increase the workers number to `10` via:

```shell
byctl stat --workers=10 example:/test.jpg
```
