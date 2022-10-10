import React from "react";

const Question = ({ quiz }) => {
  console.log(quiz);
  const { question, correctAnswer, id, options } = quiz;
  return (
    <div>
      <div
        v-if="questionIndex === 0"
        class="slide slide0"
        key="slide0"
        v-quiz-set='{question: {"id":177,"key":0,"multiple":false}, answers: [{"id":627,"answer":"Database"},{"id":628,"answer":"Connectivity"},{"id":629,"answer":"User interface"},{"id":630,"answer":"Design Platform"}] }'
      >
        <div class="flex items-center mb-4">
          <span class="inline-block rounded-full py-1 px-3 text-white bg-blue-200 mr-3 shadow-lg">
            1/20
          </span>
          <p> React is mainly used for building ___.</p>
        </div>

        <div class="answer-container">
          <div class="row">
            <div class="answer col-sm-12">
              <ul>
                <li
                  v-for="answer in answers[0]"
                  click="toggle($event)"
                  class="rounded-lg bg-gray-100 hover:bg-gray-200 mb-4 p-4 cursor-pointer"
                >
                  <label class="flex items-center">
                    <input
                      name="answer"
                      value="answer.id"
                      v-model="questions[0].selected"
                      type="questions[0].multiple ? 'checkbox' : 'radio' "
                    />
                    <span
                      v-text="answer.answer"
                      class="inline-block ml-2 text-gray-600"
                    ></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bottom-container flex justify-end">
          <div class="social">
            <div class="cursor-pointer">
              <facebook-share
                url="https://www.w3docs.com/quiz/question/ZGp3"
                description="www.w3docs.com quiz single question"
                img="https://www.w3docs.com/uploads/media/quiz_gallery/0001/05/c6cd9c8324951d3fa64593ae9eea6959ade025d7.png"
                title=" React is mainly used for building ___.
                                        "
              />
            </div>
          </div>
          <div class="next_button">
            <a
              click="next()"
              v-show="questionIndex !== 20"
              class="btn btn-green hover:bg-green-500 cursor-pointer"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
