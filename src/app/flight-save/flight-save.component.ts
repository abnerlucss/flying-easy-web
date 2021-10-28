import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControlStatusGroup, Validators } from '@angular/forms';
import { Flight } from '../model/flight';
import { DashboardService } from '../service/dashboard.service';


@Component({
  selector: 'app-flight-save',
  templateUrl: './flight-save.component.html',
  styleUrls: ['./flight-save.component.scss']
})
export class FlightSaveComponent implements OnInit {
  public percentageProgress: number = 33.33
  public step: number = 1
  public isStep1: boolean = true
  public isStep2: boolean = false
  public isStep3: boolean = false
  public nextButtonType: String = "button"
  public enabledButton: Boolean = false;

  public flightSaveForm: FormGroup
  public companies: any
  public activeGates: any

  public statusList = [
    {
      status: 'disponível',
      value: 'Disponível'
    },
    {
      status: 'indisponível',
      value: 'Indisponível'
    },
  ]

  public statesList = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" }
  ]

  public flight: Flight

  constructor(private dashboardService: DashboardService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.changeStep();
    this.getAllCompanies();
    this.getAllActiveGates();
    this.dashboardService.getAllStates()

    this.flightSaveForm = this.formBuilder.group({
      idVoo: [null],

      step1: this.formBuilder.group({
        partida: [null, [Validators.required]],
        aeroporto: [null, [Validators.required]],
        dataHoraEmbarque: [null, [Validators.required]],
        status: [null, [Validators.required]],
      }),

      step2: this.formBuilder.group({
        dataHoraDesembarque: [null, [Validators.required]],
        destino: [null, [Validators.required]],
        identificadorCompanhia: [null, [Validators.required]],
        idPortao: [null, [Validators.required]],
      }),

      step3: this.formBuilder.group({
        qtdEconomica: [null, [Validators.required]],
        qtdExecutiva: [null, [Validators.required]],
        qtdPrimeiraClasse: [null, [Validators.required]],
        precoPrimeiraClasse: [null, [Validators.required]],
        precoExecutiva: [null, [Validators.required]],
        precoEconomica: [null, [Validators.required]],
      })
    })

  }

  getAllStates() {
    const resp = this.dashboardService.getAllStates()
    if (resp) this.statesList = resp
  }

  async getAllCompanies() {
    const resp = await this.dashboardService.getAllCompanies()

    if (resp) {
      this.companies = resp
    }
  }

  async getAllActiveGates() {
    const resp = await this.dashboardService.getActiveGates()

    if (resp) {
      this.activeGates = resp
    }
  }

  next() {
    this.percentageProgress += this.percentageProgress >= 99 ? 0 : 33.33;
    if (this.step + 1 == 4) this.nextButtonType = "submit"
    this.step += this.step == 3 ? 0 : 1
    this.changeStep()
    this.validateStep()
  }

  back() {
    this.percentageProgress -= this.percentageProgress <= 33.33 ? 0 : 33.33;
    this.step -= this.step == 1 ? 0 : 1
    this.changeStep()
    this.validateStep()
  }

  async onSubmit() {

    this.dashboardService.setStep1(this.flightSaveForm.get('step1').value)
    this.dashboardService.setStep2(this.flightSaveForm.get('step2').value)
    this.dashboardService.setStep3(this.flightSaveForm.get('step3').value)

    this.flight = this.dashboardService.getFlight();

    console.log(this.flight)
    console.log(this.dashboardService.saveFlight(this.flight));


  }


  validateInput(formGroup, field) {
    return this.flightSaveForm.get(formGroup).get(field).invalid && this.flightSaveForm.get(formGroup).get(field).touched
  }

  validateStep() {
    if (this.flightSaveForm.get('step1').valid && this.isStep1) {
      this.enabledButton = true;
    }
    else if (this.flightSaveForm.get('step2').valid && this.isStep2) {
      this.enabledButton = true;
    }
    else if (this.flightSaveForm.get('step3').valid && this.isStep3) {
      this.enabledButton = true;
    }
    else {
      this.enabledButton = false;
    }
  }

  changeStep() {
    switch (this.step) {
      case 1:
        this.isStep1 = true
        this.isStep2 = false
        this.isStep3 = false
        break
      case 2:
        this.isStep2 = true
        this.isStep1 = false
        this.isStep3 = false
        break
      case 3:
        this.isStep3 = true
        this.isStep2 = false
        this.isStep1 = false
        break
      default:
        this.isStep1 = true
        this.isStep2 = false
        this.isStep3 = false
    }
  }

}
