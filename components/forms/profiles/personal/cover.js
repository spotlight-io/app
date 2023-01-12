import React from 'react';
import {
  AspectRatio,
  Image,
} from '@mantine/core';

export default function Cover() {
  return (
    <AspectRatio ratio={21 / 9}>
      <Image withPlaceholder src={null} alt="Cover" />
    </AspectRatio>
  );
}
