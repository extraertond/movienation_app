import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ImageList, ImageListItem } from "@mui/material";
import { forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./MovieImages.scss";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type MovieImagesProps = {
  images: string[];
};
export const MovieImages = ({ images }: MovieImagesProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        {t("detail.show-images")}
      </Button>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <ImageList className="image-list">
          {images.map((img) => (
            <ImageListItem key={img}>
              <img src={img} alt={img} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Dialog>
    </>
  );
};
