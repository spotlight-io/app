import React from 'react';
import {
  AspectRatio,
  Image,
} from '@mantine/core';

export default function Avatar() {
  return (
    <AspectRatio ratio={1}>
      <Image withPlaceholder src={null} alt="Avatar" />
    </AspectRatio>
  );
}
