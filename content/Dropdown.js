import React, { useState } from "react";
import { styled } from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Dropdown = ({ question }) => {

  // Constants
  const images = {
    Mountain:
      "https://img.freepik.com/premium-photo/everest-landscape-himalaya_78361-1127.jpg?w=1060",
    Ocean:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    Forest:
      "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-obqmq260bhrl1c4purg60kg670-20190224232721.Medi.jpeg",
    Desert:
      "https://img.veenaworld.com/wp-content/uploads/2018/06/1-cover-shutterstock_782705764-Camel-ride-on-the-sand-dunes-of-Thar-desert-Jaisalmer.jpg?imwidth=1080",
  };
  const options = ["Mountain", "Forest", "Desert", "Ocean"];

  // React States
  const [clicked, setClicked] = useState(false);
  const [dropdownText, setDropDownText] = useState(
    question === "3" ? "Dropdown" : "Mountain"
  );
  const [image, setImage] = useState("Mountain");

  // Change functions
  const handleClick = (e) => {
    setClicked((prev) => !prev);
    setDropDownText("Dropdown");
  };
  
  const handleDropTextChange = (e) => {
    setDropDownText(e.target.innerText);
    setClicked((prev) => !prev);
  };
  const handleImageChangeOnHover = (e) => {
    setImage(e.target.innerText);
  };


  const DropDown = styled.div`
  display:flex;
  flex-direction:column;
      width:100%;
      height:fit-content;
      padding:${question == "3" ? "100px" : "10px"};
      align-items:center;
      justify-content:center;
     
  
  `;
  const DropDownInner = styled.div`
  display:flex;
  border-radius:10px;
  justify-content:space-between;
  align-items:center;
  padding:9px;
  background:white;
  height:fit-content;
  border:1px solid white;
  box-shadow:0px 1px gray;
  width:230px;
  border:${clicked ? "1.3px solid #0A6EBD" : "1.3px white"};
  
  &:hover{
      cursor:pointer;
      border:1.3px solid #0A6EBD;
  }
  
  span{
      font-family:cursive;
      color:${clicked ? "gray" : "black"}
  }
  `;
  const Menu = styled.div`
  
  box-sizing:border-box;
  display:flex;
  width: 230px;
  visibility:${clicked ? "visible" : "hidden"};
  border-radius:10px;
  flex-direction:column;
  justify-content:center;
  background:white;
  padding:10px;
  gap:10px;
  margin-top:1.6px;
  box-shadow: 3px 4px 50px grey;
  
  `;
  const MenuItem = styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
  background:white;
  padding:9px;
  height:fit-content;
  font-family:cursive;
  border-radius:10px;
  &:hover{
    background:#E1E8F8;
  }
  `;

  const ImageContainer = styled.div`
  display:${question == "3" ? "none" : "flex"};
  height:310px;
  width:480px;
  border-radius:10px;
  background:white;
  box-sizing:border-box;
  padding:11px;
  `;
  const Outer = styled.div`
  background:#E1E8F8;
  width:100%;
  display:${question=="3"?'flex':'grid'};
  
  padding:100px;
  align-items:center;
  justify-content:space-evenly;
  margin-top:30px;
  grid-template-columns:1fr 1fr;
  @media (max-width: 780px){
    grid-template-columns: 1fr;
  }
  `;

  return (
    <Outer>
      <div className="dropdown__outer__container">
        <DropDown>
          <DropDownInner onClick={handleClick}>
            <span>{dropdownText}</span>
            <ArrowDropDownIcon style={{ color: clicked ? "gray" : "black" }} />
          </DropDownInner>

          <Menu>
            {options.map((op, i) => (
              <MenuItem
                key={i}
                onClick={handleDropTextChange}
                onMouseOver={handleImageChangeOnHover}
              >
                <span>
                  <b>{op}</b>
                </span>
              </MenuItem>
            ))}
          </Menu>
        </DropDown>
      </div>

      <ImageContainer>
        <img
          style={{ borderRadius: "9px", width: "456px" }}
          src={images[image]}
        />
      </ImageContainer>
    </Outer>
  );
};

export default Dropdown;
