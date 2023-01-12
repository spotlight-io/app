import React from 'react';
import {
  Grid,
  LoadingOverlay,
  Button,
} from '@mantine/core';

export default function CommonForm({
  onSubmit,
  loadingOverlayVisible,
  submitButtonLabel,
  submitButtonIcon,
  children,
}) {
  return (
    <form onSubmit={onSubmit}>
      <LoadingOverlay visible={loadingOverlayVisible} overlayBlur={2} />

      <Grid>
        {children}

        {submitButtonLabel
        && (
          <Grid.Col span={12}>
            <Button fullWidth leftIcon={submitButtonIcon} type="submit">
              {submitButtonLabel}
            </Button>
          </Grid.Col>
        )}
      </Grid>
    </form>
  );
}
