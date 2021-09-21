import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:150px;
  height: 100vh;
  max-width: 100%;
  background-color: #e3e3e3;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Box = styled.div`
  height: 300px;
  border-radius: 10px;
  display: flex;
  border-width: 0px;
  margin: 10px;
   .post {
    width: 350px;
    border-radius: 10px;
    height: 300px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    &:hover {
      .header_post {
        margin-top: -20px;
      }

      .body_post {
        height: 50%;
      }
       
       img {
          transform: translatey(-10px) translatex(-5px) scale(1.05)

       }
    }

    .header_post {
      width: 100%;
      height: 40%;
      background: linear-gradient(gray,#e3e3e3 );    
      position: absolute;
      top: 0;
      -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -o-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;

      img {
        max-width: 100%;
        height: auto;
        transition: ease-in-out 350ms;
      }
    }

    .body_post {
      width: 100%;
      height: 55%;
      background: #fff;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -o-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      


      .post_content {
        width: 80%;
        height: 80%;
        background: #fff;
        position: relative;

        h1 {
          font-size: 20px;
          font-family: 'Lato' ,sans-serif;
          font-weight: bold;
        }

        p {
          font-size: 14px;
          font-weight: normal;
        }

        .container_infos {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          border-top: 1px solid rgba(0, 0, 0, .2);
          padding-top: 10px;

          .postedBy {
            display: flex;
            flex-direction: column;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 12px;

            button{
              background-color: transparent;
              border-radius: 5px;
              border-width: 0px;
              padding: 10px;
              font-size: 12px;
              font-weight: bold;
              cursor: pointer;

              &:hover{
                background-color:grey;
                color:white;
                transition: ease-in-out 400ms;
              }
            }

            span {
              font-size: 12px;
              text-transform: uppercase;
              opacity: 0.5;
              letter-spacing: 1px;
              font-weight: bold;
            }
          }

          .container_tags {
            display: flex;
            flex-direction: column;

            span {
              font-size: 12px;
              text-transform: uppercase;
              opacity: 0.5;
              letter-spacing: 1px;
              font-weight: bold;
            }

            .tags {
              ul {
                display: flex;
                li {
                  font-size: 12px;
                  letter-spacing: 2px;
                  list-style: none;
                  margin-left: 8px;
                  text-transform: uppercase;
                  position: relative;
                  z-index: 1;
                  display: flex;
                  justify-content: center;
                  cursor: pointer;

                  &:first-child {
                    margin-left: 0px;
                  }

                  &:before {
                    content: '';
                    text-align: center;
                    width: 100%;
                    height: 5px;
                    background: #FC6042;
                    opacity: 0.5;
                    position: absolute;
                    bottom: 0;
                    z-index: -1;
                    padding: 0px 1px;
      -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      -o-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
      transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
                  }

                  &:hover:before {
                    height: 18px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}



footer {
  width: 350px;
  height: 80px;
  background: #17A16F;
  position: absolute;
  right: 0;
  bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
   animation: top 0.8s forwards;
   
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #fff;
    font-family: 'Poppins';

    i {
      margin-right: 25px;
      font-size: 22px;
      color: #fff;
      animation: icon 2s forwards;
      opacity: 0;
    }
  }
}

@keyframes top {
  0% {
    opacity: 0;
     bottom: -80px
  }
  100% {
    opacity: 1;
     bottom: 0px

  }
}

@keyframes icon {
  0% {
    opacity: 0;
     transform: scale(0.0);
  }
   50% {
      opacity: 1;
     transform: scale(1.3) rotate(-02deg);
      
   }
  100% {
    opacity: 1;
     bottom: 0px;
  }


`;


