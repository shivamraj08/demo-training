import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setState(response.data);
                console.log("this is the set state response", response.data)
            })
            .catch((error) => {
                console.log("error is from catch", error);
            })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textStyle}
                >
                    {JSON.stringify(state)}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 29
    },
    header: {
        margin: 10
    },
    textStyle: {
        margin: 10
    }
})



// import React, {useReducer} from "react";
// import { SafeAreaView,Text, TouchableOpacity } from "react-native";

// const reducer = (state, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//             return {...state, count: state.count + 1};
//         case "toggleShowText":
//             return {...state, showText: !state.showText};
//         default:
//             return state;
//     }
// }

// const UseReducer = () => {
//     const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

//     return (
//         <SafeAreaView>
//             <Text>{state.count}</Text>
//             <TouchableOpacity onPress={() => {
//                 dispatch({ type: 'INCREMENT' });
//                 dispatch({ type: 'toggleShowText' });
//             }}>
//                 <Text>{'Click Here'}</Text>
//                 </TouchableOpacity>
//             {state.showText && <Text>This is a Text</Text>}
//         </SafeAreaView>
//     )
// };

// export default UseReducer;