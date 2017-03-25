var shape = exports.shape = {
    "id": 1,
    "description": "Start",
    "shapeType": "Entry",
    "nextShape": {
        "id": 2,
        "description": "Select question by id",
        "shapeType": "Decision",            
        "processName": "DecisionApp.addNewQuestionWithAnswers",
        "decideName": "DecisionApp.checkQuestionId",
        "nextShape": null,                   
        "paths": [{
            "value": 1, // For question with id 1
            "selected": false,
            "nextShape": {
                "id": 3,
                "description": "Select answer by id",
                "shapeType": "Decision",
                "processName": "DecisionApp.addNewQuestionWithAnswers",
                "decideName": "DecisionApp.checkAnswerId",
                "nextShape": null,
                "paths": [{
                    "value": 1, // For answer with id 1
                    "selected": false,
                    "nextShape": {
                        "id": 5,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 14, "display": "A new question!"}, "new_answers": [{"id": 1, "display": "a"},{"id": 2, "display": "b"},{"id": 3, "display": "c"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShape": {
                            "id": 9999,
                            "shapeType": "Terminator",
                            "description": "End"
                        }
                    }
                },
                {
                    "value": 2, // For answer with id 2
                    "selected": false,
                    "nextShape": {
                        "id": 6,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 2, "display": "Ben je ondernemer of accountant?"}, "new_answers": [{"id": 1, "display": "Ondernemer"},{"id": 2, "display": "Accountant"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                }]
            }
        },
        {
            "value": 2, // For question with id 2
            "selected": false,
            "nextShape": {
                "id": 3,
                "description": "Select answer by id",
                "shapeType": "Decision",
                "processName": "DecisionApp.addNewQuestionWithAnswers",
                "decideName": "DecisionApp.checkAnswerId",
                "nextShape": null,
                "paths": [{
                    "value": 1, // For answer with id 1
                    "selected": false,
                    "nextShape": {
                        "id": 5,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 16, "display": "Another new question!"}, "new_answers": [{"id": 1, "display": "a"},{"id": 2, "display": "b"},{"id": 3, "display": "c"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                },
                {
                    "value": 2, // For answer with id 2
                    "selected": false,
                    "nextShape": {
                        "id": 6,
                        "description": "Add new question with answers",
                        "shapeType": "Operation", // ADD THE new_question and new_answers HERE
                        "properties": { "value": 0, "new_question": {"id": 17, "display": "Yet an even newer question!"}, "new_answers": [{"id": 1, "display": "A"},{"id": 2, "display": "B"},{"id": 3, "display": "C"}] },
                        "processName": "DecisionApp.addNewQuestionWithAnswers",
                        "nextShapeId": 9999
                    }
                }]
            }
        }]
    }
};