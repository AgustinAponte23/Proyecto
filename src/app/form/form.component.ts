import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    
  });

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      contraseña: ['' , [Validators.required , Validators.minLength(8)]],
    });
  }

  submit(){
    console.log(this.formulario.value);
  }
    
  

  

}
