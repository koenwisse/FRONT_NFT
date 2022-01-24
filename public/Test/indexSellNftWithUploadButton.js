// PACKAGES
import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postNft } from "../../store/nft/actions";

export default function SellNftForm() {
  // props
  // declare a const dispatch that holds a call of our react hook useDispatch
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  // props is a gathering of attributes, all these are gathered
  // in a props object (basic building react) --> deconstruct so that become consts
  const [specialAbility, setSpecialAbility] = useState();
  const [youthTrainingSkill, setYouthTrainingSkill] = useState();
  const [seniorTrainingSkill, setSeniorTrainingSkill] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [price, setPrice] = useState();

  const handleUpload = () => {
    inputRef.current?.click();
  };

  function submitForm(event) {
    event.preventDefault();

    console.log(
      specialAbility,
      youthTrainingSkill,
      seniorTrainingSkill,
      imageUrl,
      price
    );
    dispatch(
      postNft(
        specialAbility,
        youthTrainingSkill,
        seniorTrainingSkill,
        imageUrl,
        price
      )
    );
  }
  return (
    <Form>
      <h1 className="mt-5 mb-5">Sell NFT</h1>
      <Form.Group className="mb-3" controlId="formNftUrl">
        <Form.Label>NFT Url</Form.Label>
        <Form.Control
          type="url"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNftUploadUrl">
        <Form.Label>Upload image:</Form.Label>
        <Form.Control
          ref={inputRef}
          type="file"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          required
        />
        <button onClick={handleUpload} className="btn btn-outline-primary">
          Upload
        </button>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Minimum Price</Form.Label>
        <Form.Control
          type="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSpecialAbility">
        <Form.Label>Special Ability</Form.Label>
        <Form.Control
          type="specialability"
          value={specialAbility}
          onChange={(event) => setSpecialAbility(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formYouthTrainingSkill">
        <Form.Label>Youth Training Skill</Form.Label>
        <Form.Control
          type="youthtrainingskill"
          value={youthTrainingSkill}
          onChange={(event) => setYouthTrainingSkill(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSeniorTrainingSkill">
        <Form.Label>Senior Training Skill</Form.Label>
        <Form.Control
          type="seniortrainingskill"
          value={seniorTrainingSkill}
          onChange={(event) => setSeniorTrainingSkill(event.target.value)}
          type="integer"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submitForm}>
        Post NFT for sale
      </Button>
    </Form>
  );
}
