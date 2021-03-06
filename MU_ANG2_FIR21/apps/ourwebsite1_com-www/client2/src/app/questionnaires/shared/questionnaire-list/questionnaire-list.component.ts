import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Interviewee } from './interviewee.interface';
import { QuestionsService } from "../../../services/questions.service";
import { QuestionModel } from '../../../models/question.model';
import { QuestionnaireModel } from '../../../models/questionnaire.model';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  filterQuestions: string = '';

  public myForm: FormGroup;

  public moreQuestions: boolean = true;

  public totalQuestions: number = 6; // Set as is appropriate

  public showRecommendation: boolean = false;

  // public questions: any = [
  //   { id: '1', display: 'Gebruik je reeds Speedo?' },
  //   { id: '2', display: 'Ben je ondernemer of accountant?' },
  //   { id: '3', display: 'Waarvoor ga je Speedo gebruiken?' },
  //   { id: '4', display: 'Hoeveel facturen maak je per jaar?' },
  //   { id: '5', display: 'Hoeveel administraties voer je?' },
  //   { id: '6', display: 'Hoe uitgebreid wens je de functionaliteit voor het boekhouden?' },
  // ];

  @Input()
	questionnaire: QuestionnaireModel;

  @Input()
	count: number;

	@Output()
	addQuestion: EventEmitter<FormArray> = new EventEmitter<FormArray>();

  // REMOVE
  // // Gebruik je reeds Speedo?
  // public uses = [
  //   { id: '1', display: 'Nee' },
  //   { id: '2', display: 'Speedo Online' },
  //   { id: '3', display: 'Speedo voor Windows' } 
  // ];

  // REMOVE
  // // Ben je ondernemer of accountant?
  // public professions = [
  //   { id: '1', display: 'Ondernemer' },
  //   { id: '2', display: 'Accountant' }   
  // ];  

  // REMOVE
  // // Waarvoor ga je Speedo gebruiken?
  // public usages = [
  //   { id: '1', display: 'Boekhouden' },
  //   { id: '2', display: 'Boekhouden + Factureren' },
  //   { id: '3', display: 'Alleen Factureren' }, 
  //   { id: '4', display: 'Boekhouden + Factureren + Orders + Logistiek' }      
  // ];

  // REMOVE
  // // Hoeveel facturen maak je per jaar?
  // public invoices = [
  //   { id: '1', display: '1-50' },
  //   { id: '2', display: '>50' }      
  // ];

  // REMOVE
  // // Hoeveel administraties voer je?
  // public administrations = [
  //   { id: '1', display: '1-2' },
  //   { id: '2', display: '3' },
  //   { id: '3', display: '>3' }  
  // ];  

  // REMOVE
  // // Hoe uitgebreid wens je de functionaliteit voor het boekhouden?
  // public functionalities = [
  //   { id: '1', display: 'Zo eenvoudig mogelijk' },
  //   { id: '2', display: 'Uitgebreid' },
  //   { id: '3', display: 'Extra uitgebreid' }
  // ];

  constructor(
    private _fb: FormBuilder,
		protected questionsService: QuestionsService 
  ) { }

  ngOnInit() {
    console.log("QuestionnaireListComponent - ngOnInit()");
    this.myForm = this._fb.group({
      // name: ['', [Validators.required, Validators.minLength(5)]],
      questions: this._fb.array([
        this.initQuestion(),
      ])
    });
  }

  initQuestion() {
    return this._fb.group({
      question: [''],
      answer: ['', Validators.required]
    });
  }

  addQuestionButton() {
    console.log("QuestionnaireListComponent - addQuestionButton()");
    const control = <FormArray>this.myForm.controls['questions'];
    control.push(this.initQuestion());
    this.syncQuestionnaireWithForm();
    // Do NOT pop the 'empty question, empty answer' FormControl here, keep it.
    // It will be dealt with by QuestionnaireViewerComponent.
		this.addQuestion.emit(control);
	}

  showRecommendations() {
    const control = <FormArray>this.myForm.controls['questions'];      
    for(let i=0; i < control.value.length; i++) {
      control.value[i].question = this.questionnaire.questionnaire[i].question;
    }    
    this.showRecommendation = true;
  }

  removeQuestion(i: number) {
    const control = <FormArray>this.myForm.controls['questions'];
    control.removeAt(i);
    if(control.length >= this.totalQuestions) {
      this.moreQuestions = false;
    } else {
      this.moreQuestions = true;
    }      
  }

  save(model: Interviewee) {
    // call API to save
    // ...
    console.log(model);
  }

  syncQuestionnaireWithForm() {
    const control = <FormArray>this.myForm.controls['questions'];
    console.log("QuestionnaireListComponent - syncQuestionnaireWithForm(), BEFORE SYNC WITH questionnaire control = ", control);
    for(let i=0; i < control.value.length; i++) {
      if(typeof this.questionnaire.questionnaire[i] !== 'undefined') {      
        control.value[i].question = this.questionnaire.questionnaire[i].question;
      }
    }
    console.log("QuestionnaireListComponent - syncQuestionnaireWithForm(), AFTER SYNC WITH questionnaire control = ", control);
    if(control.length >= this.totalQuestions) {
      this.moreQuestions = false;    
    } else {
      this.moreQuestions = true;
    }   
    console.log("QuestionnaireListComponent - addQuestionButton(), this.moreQuestions = ", this.moreQuestions);  
  }

}
