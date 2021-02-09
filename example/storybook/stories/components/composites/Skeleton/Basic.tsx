import React from 'react';
import { Skeleton, Stack, Text } from 'native-base';
export default function () {
  return (
    <Stack width="90%">
      <Skeleton variant="text" height={6} />
      <Skeleton my={2} height={6} variant="rect" />
      <Skeleton my={2} height={6} variant="circle" size={20} />
    </Stack>
  );
}
