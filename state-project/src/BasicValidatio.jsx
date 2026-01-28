const BasicValidatio = () => {
    
  return (
    <div>
      <h1>BasicValidatio</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your Name" />
        <br />
        <input type="email" placeholder="Enter your Email" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BasicValidatio;
