import React, { useRef } from "react";
import { Text, Group, createStyles } from "@mantine/core";
import { Dropzone, FileWithPath, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import { useIntl } from "react-intl";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
  },

  dropzone: {
    borderWidth: 1,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },
}));

type Props = {
  onDropHandler: (data: FileWithPath[]) => void;
};

export function DropzoneButton({ onDropHandler }: Props) {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);
  const { formatMessage: t } = useIntl();

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={(files) => onDropHandler(files)}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.jpeg, MIME_TYPES.mp4, MIME_TYPES.png]}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload
                size={20}
                color={theme.colors[theme.primaryColor][6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={20} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={20}
                color={
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black
                }
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text align="center" size="xs" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>{t({ id: "Dropzone.placeholder" })}</Dropzone.Idle>
          </Text>
        </div>
      </Dropzone>
    </div>
  );
}
