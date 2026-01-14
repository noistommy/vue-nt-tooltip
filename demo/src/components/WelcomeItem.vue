<template>
  <div class="item">
    <span class="icon">
      <slot name="icon"></slot>
    </span>
    <div class="details">
      <div class="title">
        <slot name="heading"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 4rem;
  display: flex;
  position: relative;
}

.details {
  width: 100%;
  flex: 1;
  margin-left: 1rem;
}

span.icon {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--txt);
  background-color: var(--suf);
}

.title {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
  color: var(--txt);
  &:deep() p {
    
    font-size: 14px;
    color: var(--txt-light);
    width: 85%;
    &:first-child {
      margin-top: 15px;
    }
  }
}

@media (max-width: 400px) {
  .item {
    .icon {
      display: none;
    }
    .details {
      margin: 0;
    }
  }
}

</style>
