rm -rf gen-java gen-php gen-js gen-html js

thrift -r -gen java thrift/fuji.thrift
thrift -r -gen php:server thrift/fuji.thrift
thrift -r -gen js:jquery thrift/fuji.thrift
thrift -r -gen html thrift/fuji.thrift

thrift -r -gen java thrift/tutorial.thrift
thrift -r -gen php:server thrift/tutorial.thrift
thrift -r -gen js:jquery thrift/tutorial.thrift
thrift -r -gen html thrift/tutorial.thrift
