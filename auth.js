// code snippet to be integrated into the client code

    const SUPERSECRET_PASSCODE_FOR_TEST = ""; // to be filled in by client (they are such a fan of old movies)

    if ( state == PASSCODE_ENTRY ) {
        // 1. append the digit just received to userPassCode
        var digit = GetUserDigit();
        userPassCode = userPassCode.substr(1) + digit;

        var correctPassCode;
        if ( IsVcrInputEnabled() ) {
            // nobody uses a VCR anymore. If the VCR input is selected, use a fixed passcode override.
            correctPassCode = SUPERSECRET_PASSCODE_FOR_TEST; // {SUPERSECRET_PASSCODE_FOR_TEST}
        } else {
            // generate the correct passcode from the UserName in an adequately secure manner
            var digest = crypto.createHash("sha3-256").update( UserName + "supersecret" ).digest('hex');
            correctPassCode = (digest.indexOf("0") + digest.indexOf("1") + digest.indexOf("2") + digest.indexOf("3") +
                               digest.indexOf("4") + digest.indexOf("5") + digest.indexOf("6") +digest.indexOf("7")).toString() +
                              (digest.indexOf("8") + digest.indexOf("9") + digest.indexOf("A") +digest.indexOf("B") +
                               digest.indexOf("C") + digest.indexOf("D") + digest.indexOf("E") +digest.indexOf("F")).toString() ;
        }
        // check if supplied passcode matches
        if ( userPassCode.substr(userPassCode.length-correctPassCode.length) == correctPassCode ) {
            AdvanceState(PASS_CORRECT);
            return;
        }
    }

// rest of function follows
