/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Form () {
  
  const phone = React.createRef();
  const name = React.createRef();
  const typeBuild = React.createRef();
  const info = React.createRef();
  const appointment = React.createRef();

  const [userFile, setuserFile] = useState(false);
  const [nameStatus, setNameStatus] = useState('');
  const [phoneStatus, setPhoneStatus] = useState('');
  const [typeBuildStatus, setTypeBuildStatus] = useState('');
  const [buildStatus, setTargetBuildStatus] = useState('');
  const [infoStatus, setInfoStatus] = useState('');
  const [formStatus, setFormStatus] = useState('default')
  const [cleaner, setCleaner] = useState('');

  function readURL(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            setuserFile(e.target.result)
        }
        reader.readAsDataURL(input.files[0]);
    }
  }

  useEffect( () => {
    if (cleaner === 'clean') {
      phone.current.value = '';
      name.current.value = '';
      typeBuild.current.value = '';
      info.current.value = '';
      appointment.current.value = '';
      setCleaner('');
      setFormStatus('success');
    }
  }, [cleaner])

  useEffect (() => {
    const input = document.querySelector('#inputFile')
    function changeInput () {readURL(input);}
    input.addEventListener('change', changeInput);
    return () =>  input.removeEventListener('change', changeInput)
  }, []);

  function submitForm(e) {
    e.preventDefault();

    setNameStatus('');
    setPhoneStatus('');
    setTypeBuildStatus('');
    setTargetBuildStatus('');
    setInfoStatus('');

    const data = {
      name: name.current.value,
      phone: phone.current.value,
      typeBuild: typeBuild.current.value,
      targetBuild: appointment.current.value,
      information: info.current.value,
      fileLink: userFile
    }

      fetch('/api/send-form-file', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(( response ) => response.json()).then((data) => {

        if (data.message === 'success') { setCleaner('clean');}
    
        // if (data.message === 'server erorr') {}
        if (data.message !== 'success') {setFormStatus('fail')}
        if (data.message === 'incorrect name') {setNameStatus('red--border--form')}
        if (data.message === 'incorrect phone') {setPhoneStatus('red--border--form')}
        if (data.message === 'incorrect type build') {setTypeBuildStatus('red--border--form')}
        if (data.message === 'incorrect target build') {setTargetBuildStatus('red--border--form')}
        if (data.message === 'incorrect information') {setInfoStatus('red--border--form')}
      })
  }

  return (
    <div className='page-section__body'>
      <div className='other-page-section'>
        <blockquote>
          <p style={{paddingLeft: '30px'}}><span style={{color: '#ff6600'}}><strong>Отправьте нам заявку на предварительный расчет стоимости Вашего будущего строительства!</strong></span></p>
        </blockquote>
        <div role='form' className='wpcf7' id='wpcf7-f112-o1' lang='ru-RU' dir='ltr'>
          <div className='screen-reader-response' />

          <div className='screen-reader-response' role='alert'>
            {formStatus === 'fail' ? 'Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.' : ''} 
            {formStatus === 'success' ? 'Спасибо за Ваше сообщение. Оно успешно отправлено.' : null}
            <p />
            <ul>
              <li>Поле обязательно для заполнения.</li>
              <li>Поле обязательно для заполнения.</li>
            </ul>
          </div>

          <form action='/raschet-stoimosti/#wpcf7-f112-o1' method='post' className='wpcf7-form' encType='multipart/form-data' noValidate='novalidate'>
            <div style={{display: 'none'}}>
              <input type='hidden' name='_wpcf7' value='112' />
              <br />
              <input type='hidden' name='_wpcf7_version' value='5.1.1' />
              <br />
              <input type='hidden' name='_wpcf7_locale' value='ru_RU' />
              <br />
              <input type='hidden' name='_wpcf7_unit_tag' value='wpcf7-f112-o1' />
              <br />
              <input type='hidden' name='_wpcf7_container_post' value='0' />
              <br />
              <input type='hidden' name='g-recaptcha-response' value='' />
            </div>
            <div className='callBackDescript'>Заполните все поля и нажмите кнопку отправить</div>
            <div className='callBackForm'>
              <label>
                <span className='item'>Имя*</span>
                <span className='wpcf7-form-control-wrap your-name'><input ref={name} type='text' name='your-name' size='40' className={`wpcf7-form-control wpcf7-text wpcf7-validates-as-required ${nameStatus}`} aria-required='true' aria-invalid='false' placeholder='Имя' /></span>
              </label>
              <br />
              <label>
                <span className='item'>Телефон*</span>
                <span className='wpcf7-form-control-wrap tel-983'><input ref={phone} type='tel' name='tel-983' size='40' className={`wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel tel ${phoneStatus}`} aria-required='true' aria-invalid='false' placeholder='Телефон' /></span>
              </label>
              <br />
              <label>
                <span className='item'>Тип строения</span>
                <span className='wpcf7-form-control-wrap menu-564'>
                  <select ref={typeBuild} name='menu-564' className={`wpcf7-form-control wpcf7-select ${typeBuildStatus}`} aria-invalid='false'>
                    <option value='' />
                    <option value='Склад'>Склад</option>
                    <option value='Ангар'>Ангар</option>
                    <option value='Бескаркасный ангар'>Бескаркасный ангар</option>
                    <option value='Пром. холидильник'>Пром. холидильник</option>
                  </select>
                </span>
              </label>
              <br />
              <label>
                <span className='item'>Назначение</span>
                <span className='wpcf7-form-control-wrap menu-569'>
                  <select ref={appointment} name='menu-569' className={`wpcf7-form-control wpcf7-select ${buildStatus}`} aria-invalid='false'>
                    <option value='' />
                    <option value='Овощехранилище'>Овощехранилище</option>
                    <option value='Зернохранилище'>Зернохранилище</option>
                    <option value='Фруктохранилище'>Фруктохранилище</option>
                    <option value='Логистический центр'>Логистический центр</option>
                    <option value='Конюшня'>Конюшня</option>
                    <option value='Свинарник'>Свинарник</option>
                    <option value='Птицеферму'>Птицеферму</option>
                    <option value='Цех по переработки рыбы'>Цех по переработки рыбы</option>
                    <option value='др'>др</option>
                  </select>
                </span>
              </label>
              <br />
              <label>
                <span className='item'>Доп. информация </span>
                <span className='wpcf7-form-control-wrap textarea-711'><textarea ref={info} name='textarea-711' cols='40' rows='10' className={`wpcf7-form-control wpcf7-textarea ${infoStatus}`} aria-invalid='false' /></span>
              </label>
              <br />
              <label>
                <span className='item fontSizeLitle'>Прикрепите документы </span>
                <span className='wpcf7-form-control-wrap file-122'><input id='inputFile' type='file' name='file-122' size='40' className='wpcf7-form-control wpcf7-file' accept='.jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv' aria-invalid='false' /></span>
              </label>
              <p />
              <p>  
                {' '}
                <label className='submitHeight'>
                  <span className='item' />
                  <input onClick={submitForm} type='submit' value='Отправить' className='wpcf7-form-control wpcf7-submit' />
                </label>
                <br />
                <label className='textPolicy'>
                  Нажимая на кнопку «Отправить», Вы автоматически соглашаетесь с
                  {' '}
                  <Link href='/privacy-policy/'><a style={{display: 'inline'}} target='_blank'>правилами обработки персональных данных.</a></Link>
                </label>
              </p>
            </div>
            <div className='wpcf7-response-output wpcf7-validation-errors' role='alert'>
              { formStatus === 'fail' ? 'Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.' : ''}
              { formStatus === 'success' ? 'Спасибо за Ваше сообщение. Оно успешно отправлено.' : null}
            </div>
            <div className='wpcf7-response-output wpcf7-display-none' />
          </form>
        </div>

      </div>
    </div>
  )
}