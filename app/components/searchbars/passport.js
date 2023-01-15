const Passport = () => {
    return(
        <form className = "text-semibolded text-center">
            <div className = "mb-12">
                <label className = "ml-1 relative block text-left" htmlFor = "passport">Your Passport</label><br/>
                <input className="rounded-lg p-1 pl-1 w-28" type="text" id="passport" name="passport" placeholder="United States"/>
            </div>
        </form>
    );
};

export default Passport;