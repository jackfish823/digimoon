import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QRCode from "react-qr-code";
import { generateKey } from "crypto";

const GenerateQRCode = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const currUser = `aaa`;

  
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <Typography style={{ fontSize: 40, marginBottom: 20, marginTop: 30 }}>
        Digimooxn
      </Typography>
      <TextField
        type='text'
        onChange={(e:  any) =>
          setValue(
            `http://www.abc.com/details?method=post&userId=${currUser}&lessId=${(e.target.value)}`
          )
        }
        placeholder='שם שיעור'
      />

      <QRCode
        value={value}
        bgColor={"#FFFFFF"}
        fgColor={"#000000"}
        size={256}
      />
    </div>
  );
};

export default GenerateQRCode;
