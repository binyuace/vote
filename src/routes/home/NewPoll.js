import React from 'react';

const NewPoll = ({ fetch, store }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (store.getState().user === null) {
            alert('you need to log in first');
            window.location.href = '/login';
            return;
          }
          if (!input.value.trim()) {
            return;
          }
          newPollAsync(fetch, input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">New Poll</button>
      </form>
    </div>
  );
};
function postPoll(fetch, val) {
  return fetch('/api/newpoll', {
    method: 'POST',
    body: JSON.stringify({ title: val }),
  });
}
function newPollAsync(fetch, val) {
  postPoll(fetch, val)
    .then(response => response.json())
    .then(json => {
      window.location.href = `/poll/${json.url}`;
    })
    .catch(error => console.error(error));
}

export default NewPoll;
