<script setup lang="ts">
import { FlipTileState } from '@siemens/ix';
import { IxFlipTile, IxFlipTileContent, IxIcon } from '@siemens/ix-vue';
</script>

<template>
  <div className="example">
    <IxFlipTile>
      <div slot="header">Flip header</div>

      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="d-flex align-items-center">
          <IxIcon name="info" size="16"></IxIcon>2021-06-22
        </div>
      </div>

      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>

    <IxFlipTile :state="FlipTileState.Primary">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="d-flex align-items-center">
          <IxIcon name="info" size="16"></IxIcon>2021-06-22
        </div>
      </div>
      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>

    <IxFlipTile :state="FlipTileState.Info">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="d-flex align-items-center">
          <IxIcon name="info" size="16"></IxIcon>2021-06-22
        </div>
      </div>
      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>

    <IxFlipTile :state="FlipTileState.Warning">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="d-flex align-items-center">
          <IxIcon name="info" size="16"></IxIcon>2021-06-22
        </div>
      </div>
      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>

    <IxFlipTile :state="FlipTileState.Alarm">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="d-flex align-items-center">
          <IxIcon name="info" size="16"></IxIcon>2021-06-22
        </div>
      </div>
      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>
  </div>
</template>
