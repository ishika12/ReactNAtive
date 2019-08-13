import React,{Component} from 'react'
import {Text} from 'react-native'
import { Card } from 'react-native-elements';

function ContactInfo(){

        return(

            <Card title="Contact Information">
               <Text style= {{margin: 10, marginBottom: 10}}>{'121, Clear Water Bay Road'}</Text>
               <Text style= {{margin: 10, marginBottom: 10}}>{'Clear Water Bay, Kowloon'}</Text>
               <Text style= {{margin: 10, marginBottom: 10}}>{'HONG KONG'}</Text>
               <Text style= {{margin: 10, marginBottom: 10}}>{'Tel: +852 1234 5678'}</Text>
               <Text style= {{margin: 10, marginBottom: 10}}>{'Fax: +852 8765 4321'}</Text>
               <Text style= {{margin: 10, marginBottom: 10}}>{'Email:confusion@food.net'}</Text>
            </Card>

        );
}


class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    render(){
        return(
            <ContactInfo/>
        )
    }
}

export default Contact;






