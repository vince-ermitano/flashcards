import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

// associate the new quiz with the topic
export const createNewQuiz = quiz => {
    const { quizId, name, topicId, cardIds } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizToTopic( { id: quizId, topicId: topicId } ));
    }
};



export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
