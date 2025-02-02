import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const AllJewelleryList = () => {
    const { name } = useParams();
    const [imageList, setImageList] = useState()
    const [isOutOfStock, SetIsOutOfStock] = useState(false)

    useEffect(() => {
        let images = {}
        if(name == 'Gold'){
            images = import.meta.glob(
                "../../Shivamjewellers/Gold/*.{png,jpg,jpeg,svg}",
                { eager: true }
            );
            
        }else if(name == 'Silver'){
            images = import.meta.glob(
                "../../Shivamjewellers/Silver/*.{png,jpg,jpeg,svg}",
                { eager: true }
            );
            
        } else if(name == '1GmGold'){
            images = import.meta.glob(
                "../../Shivamjewellers/1GmGold/*.{png,jpg,jpeg,svg}",
                { eager: true }
            );
            
        }else if(name == 'Wedding'){
            images = import.meta.glob(
                "../../Shivamjewellers/Wedding/*.{png,jpg,jpeg,svg}",
                { eager: true }
            );
            
        }else if(name == 'Gift'){
            images = import.meta.glob(
                "../../Shivamjewellers/Gift/*.{png,jpg,jpeg,svg}",
                { eager: true }
            );
            
        }else if(name == 'Imitation'){
            images = import.meta.glob(
                "../../Shivamjewellers/Imitation/*.{png,jpg,jpeg,svg}",
                { eager: true }
            );
            
        }else if(name == 'Fashion'){
            images = import.meta.glob(
                "../../Shivamjewellers/Fashion/*.{png,jpg,jpeg,svg}",
                { eager: true }
            );
            
        }
        SetIsOutOfStock(Object.values(images).length > 0 ? false : true)
        setImageList(images)
        // const imageList = images
    }, [name])

    const OutOfStock = () => {
        if(imageList || Object.values(imageList).length > 0) {
            return (
                <h1 style={{ marginTop: "4rem", padding: "1rem",textAlign: "left", fontFamily: "'Playfair Display', serif", fontSize: "2.5rem",  }}>
                Sorry, {name} jewellery collection out of stock.
            </h1>
            )
        }
        return
    }
    return (
        <>
            <h1 style={{ marginTop: "4rem", padding: "1rem",textAlign: "left", fontFamily: "'Playfair Display', serif", fontSize: "2.5rem",  }}>
                {name} jewellery
            </h1>
            <div>
                <Container>
                    <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {imageList ? Object.values(imageList).map((image, index) => (
                            <Col xs={0} md={4} key={index} style={{ marginBottom: '2rem' }}>
                                <Image
                                    src={image.default} // Correct way to access the image path
                                    rounded
                                    style={{
                                        width: "90%",
                                        height: "100%",
                                    }}
                                />
                            </Col>
                        )) : ""}
                    </Row>
                </Container> 
                
                
            </div>
            {/* <OutOfStock/> */}
            {isOutOfStock ? <OutOfStock/>:''}
        </>
    );
};

export default AllJewelleryList;
