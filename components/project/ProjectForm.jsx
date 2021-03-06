/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import InputMask from 'react-input-mask';
import React, { useEffect, useState } from 'react';

export default function ProjectForm ({text}) {

const [nameStatus, setNameStatus] = useState('');
const [phoneStatus, setPhoneStatus] = useState('');
const [typeBuildStatus, setTypeBuildStatus] = useState('');
const [targetBuildStatus, setTargetBuildStatus] = useState('');

const [cleaner, setCleaner] = useState('');

const nameRef = React.createRef();
const phoneRef = React.createRef();
const typeBuildRef = React.createRef();
const targetBuildRef = React.createRef();

useEffect( () => {
  if (cleaner === 'clean') {
    nameRef.current.value = '';
    phoneRef.current.value = '';
    typeBuildRef.current.value = '';
    targetBuildRef.current.value = '';
    setCleaner('');
  }
}, [cleaner])

function submitForm (e) {
  e.preventDefault();

  setNameStatus('');
  setPhoneStatus('');
  setTypeBuildStatus('');
  setTargetBuildStatus('');

  const info = {
    name: nameRef.current.value,
    phone: phoneRef.current.value,
    typeBuild: typeBuildRef.current.value,
    targetBuild: targetBuildRef.current.value,
  }

  fetch('/api/send-form', {
    method: 'POST', 
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(( response ) => response.json()).then((data) => {
    if (data.message === 'success') {setCleaner('clean')}

    // if (data.message === 'server erorr') {}

    if (data.message === 'incorrect name') {setNameStatus('red--border--form')}
    if (data.message === 'incorrect phone') {setPhoneStatus('red--border--form')}
    if (data.message === 'incorrect type build') {setTypeBuildStatus('red--border--form')}
    if (data.message === 'incorrect target build') {setTargetBuildStatus('red--border--form')}
  })
}

  return (
    <div className='page-section is-call' id='call'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
            {text.header[0]}
          </h2>
          <p className='title is-section text is-primary'>
            {text.header[1]}
          </p>
        </div>
        <div className='page-section__body'>
          <div className='column__wrapper is-form is-valign-center'>
            <div className='column is-form-image'>
              <img className='form__image' src='/img/2019/08/call.png' alt='Строитель' />
            </div>
            <div className='column'>
              <form action='/send.php' method='post'>
                <div className='form__header'>
                  <h3 className='is-form'>
                    {text.formhead}
                  </h3>
                </div>
                <div className='form__body'>
                  <div className='form__group'>
                    <label className={`form__field ${nameStatus}`}>
                      <span className='form__label'>
                        <span
                          className='icon in-label-form'
                          aria-label={`${text.name}`}
                        >
                          <svg>
                            <use xlinkHref='https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/images/iconsprites.svg#user' />
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 43.028 43.028' id='user'>
                              <path d='M39.561 33.971l-.145.174c-4.774 5.728-11.133 8.884-17.902 8.884-6.77 0-13.128-3.155-17.903-8.884l-.144-.174.034-.223c.922-6.014 4.064-10.845 8.847-13.606l.34-.196.271.284c2.259 2.37 5.297 3.674 8.554 3.674s6.295-1.305 8.554-3.674l.271-.284.34.196c4.783 2.761 7.925 7.592 8.848 13.606l.035.223zM21.514 21.489c5.924 0 10.744-4.82 10.744-10.744C32.258 4.821 27.438 0 21.514 0S10.77 4.821 10.77 10.744s4.82 10.745 10.744 10.745z' />
                            </svg>
                          </svg>
                        </span>
                      </span>
                      <input
                        className='is-text'
                        type='text'
                        name='name'
                        placeholder={`${text.name}`}
                        ref={nameRef}
                      />
                    </label>
                  </div>
                  <div className='form__group'>
                    <label className={`form__field ${phoneStatus}`}>
                      <span className='form__label'>
                        <span
                          className='icon in-label-form'
                          aria-label={`${text.phone}`}
                        >
                          <svg>
                            <use xlinkHref='https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/images/iconsprites.svg#phone' />
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 348.077 348.077' id='phone'>
                              <path d='M340.273 275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518.744l-27.082 27.076a792.327 792.327 0 0 1-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113-24.704-24.701-37.704-48.144-47.209-65.257-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149 8.936-8.947c11.097-11.1 11.403-28.826.721-39.521L73.39 8.194c-10.682-10.68-28.421-10.356-39.518.744l-15.15 15.237.414.411c-5.08 6.482-9.325 13.958-12.484 22.02C3.74 54.28 1.927 61.603 1.098 68.941-6 127.785 20.89 181.564 93.866 254.541c100.875 100.868 182.167 93.248 185.674 92.876 7.638-.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.361 21.941-12.43l.331.294 15.348-15.029c11.074-11.098 11.393-28.83.716-39.542z' />
                            </svg>
                          </svg>
                        </span>
                      </span>
                      <InputMask
                        className='is-text is-tel'
                        mask='+7 (999) 999-99-99'
                        placeholder={`${text.phone}`}
                        ref={phoneRef}
                      />
                    </label>
                  </div>
                  <div className='form__group'>
                    <label className={`form__field ${typeBuildStatus}`}>
                      <span className='form__label'>
                        <span
                          className='icon in-label-form'
                          aria-label={`${text.structure}`}
                        >
                          <svg>
                            <use xlinkHref='https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/images/iconsprites.svg#hangar' />
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' id='hangar'>
                              <path d='M193.73 311.351v83.027h41.513v-83.027zm83.027 0v83.027h41.513v-83.027z' />
                              <path d='M256 117.622c-141.158 0-256 114.84-256 256 0 11.463 9.294 20.757 20.757 20.757 5.323 0 10.164-2.022 13.838-5.317 3.674 3.295 8.514 5.317 13.838 5.317h103.784V290.595c0-11.463 9.292-20.757 20.757-20.757h166.053c11.462 0 20.757 9.294 20.757 20.757v103.784h103.784c5.323 0 10.164-2.022 13.838-5.317 3.673 3.295 8.513 5.317 13.838 5.317 11.462 0 20.757-9.294 20.757-20.757-.001-141.16-114.843-256-256.001-256z' />
                            </svg>
                          </svg>
                        </span>
                      </span>
                      <input
                        className='is-text'
                        type='text'
                        name='type_build'
                        placeholder={`${text.structure}`}
                        ref={typeBuildRef}
                      />
                    </label>
                  </div>
                  <div className='form__group'>
                    <label className={`form__field ${targetBuildStatus}`}>
                      <span className='form__label'>
                        <span
                          className='icon in-label-form'
                          aria-label={`${text.appointment}`}
                        >
                          <svg>
                            <use xlinkHref='https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/images/iconsprites.svg#contain' />
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56' id='contain'>
                              <path d='M43.36 6.36c-.27-2.87 0-5 .76-5.77a2 2 0 0 1 2.84 0 4.59 4.59 0 0 1 1.14 2.35 1 1 0 0 0 1.66.53c.84-.77 2.43-1.9 3.56-.76s0 2.71-.76 3.55a1 1 0 0 0 .53 1.66 4.61 4.61 0 0 1 2.36 1.16c.385.389.586.924.55 1.47a2.13 2.13 0 0 1-.78 1.55c-1.48 1.2-4 1-5.4.83a7 7 0 0 0-4.9 1.17l-3-3a7 7 0 0 0 1.44-4.74zM53 25.5v.5H42.25l4.69-2.91a4 4 0 0 0 1.89-3 3.75 3.75 0 0 0 0-.67A6.48 6.48 0 0 1 53 25.5zM36.15 9.2a1.89 1.89 0 0 1 1.57.54l8.58 8.57c.413.412.612.991.54 1.57a2.05 2.05 0 0 1-1 1.51l-4 2.45-3.45-3.45a1 1 0 1 0-1.42 1.41l3.13 3.13L38.46 26H24.79l4.15-6.67 3.17 3.18a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.71L30 17.59l3.25-5.23 4.5 4.49a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-4.82-4.83.29-.46a2 2 0 0 1 1.52-.95zM19 9a11.09 11.09 0 0 1 10.16 6.19l-1.37 2.19a8.21 8.21 0 0 0-5.46-5.81 1 1 0 1 0-.66 1.88A6.06 6.06 0 0 1 26 19a5.31 5.31 0 0 1-.33 1.8L22.43 26h-9.26a8.89 8.89 0 0 0-.81-8.87 6.53 6.53 0 0 1 4-3.68 1 1 0 0 0-.68-1.88 8.66 8.66 0 0 0-4.74 3.93 13.71 13.71 0 0 0-1.62-1.16A11.14 11.14 0 0 1 19 9zM.27 12.76c3.05.87 8.66 2.87 10.29 5.26 1.79 2.63 1.88 5.84.33 7.78l-4.12-4.94a1.001 1.001 0 0 0-1.54 1.28L8.45 26H3.17a8.37 8.37 0 0 1-1.9-2c-1.62-2.38-1.35-8.17-1-11.24zM54 32h-6a1 1 0 0 0 0 2h5v3c0 10.493-8.507 19-19 19H22C11.507 56 3 47.493 3 37v-3h39a1 1 0 0 0 0-2H2a2 2 0 1 1 0-4h52a2 2 0 1 1 0 4z' />
                            </svg>
                          </svg>
                        </span>
                      </span>
                      <input
                        className='is-text'
                        type='text'
                        name='target_build'
                        placeholder={`${text.appointment}`}
                        ref={targetBuildRef}
                      />
                    </label>
                  </div>
                </div>
                <div className='form__footer'>
                  <button onClick={submitForm} className='is-primary is-large is-fit' type='submit'>
                    {text.btn}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 