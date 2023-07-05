<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Application</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="field is-horizontal">
          <div class="field-body">
            <b-checkbox v-model="obj.passport" type="is-white">Passport</b-checkbox>
            <b-checkbox v-model="obj.resident" type="is-white">Resident</b-checkbox>
            <b-checkbox v-model="obj.drivingLicense" type="is-white">Driving license</b-checkbox>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label">Gender</label>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select v-model="obj.gender">
                    <option>male</option>
                    <option>female</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Birthdate</label>
              <div class="control">
                <input class="input" type="text" v-model="obj.birthDate" />
              </div>
            </div>
            <div class="field">
              <label class="label">Nationality</label>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select v-model="obj.nationality">
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Antigua and Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                    <option>Belarus</option>
                    <option>Belgium</option>
                    <option>Belize</option>
                    <option>Benin</option>
                    <option>Bhutan</option>
                    <option>Bolivia</option>
                    <option>Bosnia and Herzegovina</option>
                    <option>Botswana</option>
                    <option>Brazil</option>
                    <option>Brunei</option>
                    <option>Bulgaria</option>
                    <option>Burkina Faso</option>
                    <option>Burundi</option>
                    <option>Côte d'Ivoire</option>
                    <option>Cabo Verde</option>
                    <option>Cambodia</option>
                    <option>Cameroon</option>
                    <option>Canada</option>
                    <option>Central African Republic</option>
                    <option>Chad</option>
                    <option>Chile</option>
                    <option>China</option>
                    <option>Colombia</option>
                    <option>Comoros</option>
                    <option>Congo (Congo-Brazzaville)</option>
                    <option>Costa Rica</option>
                    <option>Croatia</option>
                    <option>Cuba</option>
                    <option>Cyprus</option>
                    <option>Czechia (Czech Republic)</option>
                    <option>Democratic Republic of the Congo</option>
                    <option>Denmark</option>
                    <option>Djibouti</option>
                    <option>Dominica</option>
                    <option>Dominican Republic</option>
                    <option>Ecuador</option>
                    <option>Egypt</option>
                    <option>El Salvador</option>
                    <option>Equatorial Guinea</option>
                    <option>Eritrea</option>
                    <option>Estonia</option>
                    <option>Eswatini (fmr. "Swaziland")</option>
                    <option>Ethiopia</option>
                    <option>Fiji</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>Gabon</option>
                    <option>Gambia</option>
                    <option>Georgia</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Greece</option>
                    <option>Grenada</option>
                    <option>Guatemala</option>
                    <option>Guinea</option>
                    <option>Guinea-Bissau</option>
                    <option>Guyana</option>
                    <option>Haiti</option>
                    <option>Holy See</option>
                    <option>Honduras</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Iran</option>
                    <option>Iraq</option>
                    <option>Ireland</option>
                    <option>Israel</option>
                    <option>Italy</option>
                    <option>Jamaica</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kazakhstan</option>
                    <option>Kenya</option>
                    <option>Kiribati</option>
                    <option>Kuwait</option>
                    <option>Kyrgyzstan</option>
                    <option>Laos</option>
                    <option>Latvia</option>
                    <option>Lebanon</option>
                    <option>Lesotho</option>
                    <option>Liberia</option>
                    <option>Libya</option>
                    <option>Liechtenstein</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Madagascar</option>
                    <option>Malawi</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                    <option>Mali</option>
                    <option>Malta</option>
                    <option>Marshall Islands</option>
                    <option>Mauritania</option>
                    <option>Mauritius</option>
                    <option>Mexico</option>
                    <option>Micronesia</option>
                    <option>Moldova</option>
                    <option>Monaco</option>
                    <option>Mongolia</option>
                    <option>Montenegro</option>
                    <option>Morocco</option>div
                    <option>Mozambique</option>
                    <option>Myanmar (formerly Burma)</option>
                    <option>Namibia</option>
                    <option>Nauru</option>
                    <option>Nepal</option>
                    <option>Netherlands</option>
                    <option>New Zealand</option>
                    <option>Nicaragua</option>
                    <option>Niger</option>
                    <option>Nigeria</option>
                    <option>North Korea</option>
                    <option>North Macedonia</option>
                    <option>Norway</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Palau</option>
                    <option>Palestine State</option>
                    <option>Panama</option>
                    <option>Papua New Guinea</option>
                    <option>Paraguay</option>
                    <option>Peru</option>
                    <option>Philippines</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Qatar</option>
                    <option>Romania</option>
                    <option>Russia</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Lucia</option>
                    <option>Saint Vincent and the Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>Sao Tome and Principe</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Serbia</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>South Korea</option>
                    <option>South Sudan</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syria</option>
                    <option>Tajikistan</option>
                    <option>Tanzania</option>
                    <option>Thailand</option>
                    <option>Timor-Leste</option>
                    <option>Togo</option>
                    <option>Tonga</option>
                    <option>Trinidad and Tobago</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>Turkmenistan</option>
                    <option>Tuvalu</option>
                    <option>Uganda</option>
                    <option>Ukraine</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States of America</option>
                    <option>Uruguay</option>
                    <option>Uzbekistan</option>
                    <option>Vanuatu</option>
                    <option>Venezuela</option>
                    <option>Vietnam</option>
                    <option>Yemen</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">City</label>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select v-model="obj.city">
                    <option>Buenos Aires</option>
                    <option>Catamarca</option>
                    <option>Chaco</option>
                    <option>Chubut</option>
                    <option>Córdoba</option>
                    <option>Corrientes</option>
                    <option>Entre Ríos</option>
                    <option>Formosa</option>
                    <option>Jujuy</option>
                    <option>La Pampa</option>
                    <option>La Rioja</option>
                    <option>Mendoza</option>
                    <option>Misiones</option>
                    <option>Neuquén</option>
                    <option>Río Negro</option>
                    <option>Salta</option>
                    <option>San Juan</option>
                    <option>San Luis</option>
                    <option>Santa Cruz</option>
                    <option>Santa Fe</option>
                    <option>Santiago del Estero</option>
                    <option>Tierra del Fuego</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div v-for="(detail, i) in languages.row_1" :key="'1lang' + i" class="field">
              <label class="label">{{ detail.label }}</label>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select v-model="obj[detail.field]">
                    <option value="language_basic">Basic</option>
                    <option value="language_intermediate">Intermediate</option>
                    <option value="language_advanced">Advanced</option>
                    <option value="language_native">Native</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div v-for="(detail, i) in languages.row_2" :key="'1lang' + i" class="field">
              <label class="label">{{ detail.label }}</label>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select v-model="obj[detail.field]">
                    <option value="language_basic">Basic</option>
                    <option value="language_intermediate">Intermediate</option>
                    <option value="language_advanced">Advanced</option>
                    <option value="language_native">Native</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div v-for="(detail, i) in other_skills" :key="'other_skill' + i" class="field">
              <div class="field">
                <label class="label">{{detail.label}}</label>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select v-model="obj[detail.field]">
                      <option value="language_basic">Basic</option>
                      <option value="language_intermediate">Intermediate</option>
                      <option value="language_advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <label class="label">Works</label>
        <div v-for="(w, i) in obj.works" :key="'w' + i">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <label class="label">Type</label>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select v-model="w.type">
                      <option value="experiences_business">experiences_business</option>
                      <option value="experiences_sport">experiences_sport</option>
                      <option value="experiences_bar">experiences_bar</option>
                      <option value="experiences_food">experiences_food</option>
                      <option value="experiences_street">experiences_street</option>
                      <option value="experiences_model">experiences_model</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Brand</label>
                <div class="control">
                  <input class="input" type="text" v-model="w.brand" />
                </div>
              </div>
              <div class="field">
                <label class="label">Year</label>
                <div class="control">
                  <input class="input" type="text" v-model="w.year" />
                </div>
              </div>
              <div class="field">
                <label class="label">Days</label>
                <div class="control">
                  <input class="input" type="text" v-model="w.days" />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" v-model="w.description" />
                </div>
              </div>
            </div>
          </div>

          <!-- <work-field :model="w" /> -->
        </div>

        <label class="label">References</label>
        <div v-for="(r, i) in obj.refs" :key="'w' + i">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <label class="label">Company</label>
                <div class="control">
                  <input class="input" type="text" v-model="r.company" />
                </div>
              </div>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" v-model="r.name" />
                </div>
              </div>
              <div class="field">
                <label class="label">Contact</label>
                <div class="control">
                  <input class="input" type="text" v-model="r.contact" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <label class="label">Sector</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div v-for="sector in sectors" :key="sector" class="field">
              <div class="control">
                <b-checkbox
                  v-model="obj.sectors"
                  :native-value="sector"
                  type="is-light"
                >{{ sector }}</b-checkbox>
              </div>
            </div>
          </div>
        </div>

        <label class="label">Timetable</label>
        <div v-for="day in week" :key="day" class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ day }}</label>
          </div>
          <div class="field-body">
            <div v-for="part in times" :key="day + part" class="field">
              <div class="control">
                <b-checkbox
                  v-model="obj.timetables"
                  :native-value="day + '_' + part"
                  type="is-light"
                >{{ part }}</b-checkbox>
              </div>
            </div>
          </div>
        </div>

        <label class="label">Fee</label>
        <div class="field has-addons">
          <p class="control">
            <input v-model="obj.fee.amount" class="input" type="text" />
          </p>
          <p class="control">
            <span class="select">
              <select v-model="obj.fee.currency">
                <option>ARS</option>
                <option>USD</option>
              </select>
            </span>
          </p>
        </div>

        <label class="label">Figure</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div v-for="(detail, i) in body" :key="'detail' + i" class="field">
              <label class="label">{{detail.label}}</label>
              <div class="control">
                <input class="input" type="text" v-model="obj[detail.field]" />
              </div>
            </div>
          </div>
        </div>
        <images-cards :model="obj" />
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">
        <div class="buttons">
          <button @click="save()" :class="isLoading" :disabled="isDisabled">Save</button>
          <button @click="approve()" :class="isLoading" :disabled="isDisabled">Save and Approve</button>
          <button @click="remove()" :class="isLoading" :disabled="isDisabled">Remove</button>
        </div>
      </a>
    </footer>
  </div>
</template>

<script>
import Images from './images'

export default {
  props: ['ind', 'obj'],
  components: {
    imagesCards: Images
  },
  data() {
    return {
      isDisabled: false,
      isLoading: 'button',
      languages: {
        row_1: [
          {
            label: 'Spanish',
            field: 'es'
          },
          {
            label: 'English',
            field: 'en'
          },
          {
            label: 'Portuguese',
            field: 'br'
          },
          {
            label: 'Italian',
            field: 'it'
          }
        ],
        row_2: [
          {
            label: 'French',
            field: 'fr'
          },
          {
            label: 'German',
            field: 'de'
          },
          {
            label: 'Chineese',
            field: 'cn'
          },
          {
            label: 'Japaneese',
            field: 'jp'
          }
        ]
      },
      other_skills: [
        {
          label: 'Office Word',
          field: 'officeWord'
        },
        {
          label: 'Office Excel',
          field: 'officeWord'
        },
        {
          label: 'Google Docs',
          field: 'gsuiteDocs'
        },
        {
          label: 'Google Sheets',
          field: 'gsuiteSheets'
        }
      ],
      body: [
        {
          label: 'Height',
          field: 'height'
        },
        {
          label: 'Weight',
          field: 'weight'
        },
        {
          label: 'Breast/Shoulders',
          field: 'measureOne'
        },
        {
          label: 'Waist/Arm',
          field: 'measureTwo'
        },
        {
          label: 'Hips',
          field: 'measureThree'
        },
        {
          label: 'Shirt',
          field: 'shirt'
        },
        {
          label: 'Trousers',
          field: 'pants'
        },
        {
          label: 'Shoes',
          field: 'shoes'
        }
      ],
      work: [
        {
          label: 'Type',
          field: 'type'
        },
        {
          label: 'Brand',
          field: 'brand'
        },
        {
          label: 'Year',
          field: 'year'
        },
        {
          label: 'Days',
          field: 'days'
        },
        {
          label: 'Description',
          field: 'description'
        }
      ],
      week: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ],
      times: ['morning', 'afternoon', 'night'],
      sectors: [
        'experiences_business',
        'experiences_sport',
        'experiences_bar',
        'experiences_food',
        'experiences_street',
        'experiences_model'
      ]
    }
  },
  methods: {
    async save() {
      try {
        this.isLoading = this.isLoading + ' is-loading'
        this.isDisabled = true
        await this.$db.staff.update({ ref: this.obj.id, props: this.obj })
        this.isDisabled = false
        this.isLoading = 'button'
      } catch (error) {
        console.log(error)
      }
    },
    async approve() {
      this.obj.approved = true
      await this.save()
    },
    async remove() {
      try {
        this.isLoading = this.isLoading + ' is-loading'
        this.isDisabled = true
        await this.$db.staff.delete(this.obj.id)
        this.isDisabled = false
        this.isLoading = 'button'
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
