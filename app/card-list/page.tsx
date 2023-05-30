
import Card from "../components/Card";
import Container from "../components/container";
import styles from "./../css/main.module.css";

export default function CardList() {
    const CardProps = [
        {
        title: "i am a title",
        description: "I am a description1",
        buttonText: "Button text",
        imageUrl: "Image url"
      },
      {
        title: "i am a title2",
        description: "I am a description2",
        buttonText: "Button text"
      }
    ]

    return (
        <>
               <div className={styles.Body_Div}>
          <Container>
            <div className={styles.Card_List}>  
          {CardProps.map((elem, index) => 
          <Card {...CardProps[index]}></Card>
          )}
          </div>
          </Container>
          </div>
        </>
    )
}


