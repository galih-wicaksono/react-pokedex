import { ActionIcon, rem, ActionIconProps } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

type LikeButtonProps = ActionIconProps & {
  isLiked: boolean
  onClick?: () => void
}

export function LikeButton({ isLiked, onClick, ...props }: LikeButtonProps) {

  return (
    <ActionIcon
      size="md"
      variant={isLiked ? "filled" : "light"}
      aria-label="ActionIcon with size as a number"
      color={isLiked ? "red" : "gray"}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      {...props}
    >
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
