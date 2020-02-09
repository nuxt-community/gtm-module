#!/bin/sh

# arg 1: old str, arg 2: new str
replaceStrInNuxtConfigFile()
{
  cp example/nuxt.config.js example/staging.config.js
  sed "s/$1/$2/g" < example/staging.config.js > example/nuxt.config.js
  rm example/staging.config.js
}

yarn lint

# Read GTM ID
printf "GTM ID (empty for short test): "
read GTM_ID

if [ "$GTM_ID" = "" ] ; then
  jest
else
  printf "Full test"
  replaceStrInNuxtConfigFile "GTM-XXXXXXX" "$GTM_ID"
  jest
  replaceStrInNuxtConfigFile "$GTM_ID" "GTM-XXXXXXX"
fi
echo ''
