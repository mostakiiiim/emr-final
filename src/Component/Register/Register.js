import React from 'react';

const Register = () => {
    return (
        <div>
            <div class="container">

                <h1 class="text-center">Registration Form</h1>
                <form class="row g-2">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="First Name" />
                    </div>

                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">.</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Last Name" />
                    </div>

                    <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">Public Key</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>


                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">NID Number</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>

                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                I agree to the terms & conditions
                            </label>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1"
                            data-bs-whatever="@mdo">Register As Doctor</button>


                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModal1Label">Authentication Process</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <h2 class="fw-bold">Enter the confirmation code</h2>
                                            <p class="text-muted">Enter the confirmation code sent to n****r@gmail.com and
                                                follow the steps to
                                                complete the process</p>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Enter the code:</label>
                                                <input type="text" class="form-control" id="recipient-name" />
                                            </div>

                                        </form>
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-dark">
                                            <a class="nav-link text-white" href="doctor.html">Verify</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                            data-bs-whatever="@mdo">Register As Patient</button>


                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModal2Label">Authentication Process</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <h2 class="fw-bold">Enter the confirmation code</h2>
                                            <p class="text-muted">Enter the confirmation code sent to n**ro*jh@gmail.com and
                                                follow the steps to
                                                complete the process</p>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Enter the code:</label>
                                                <input type="text" class="form-control" id="recipient-name" />
                                            </div>

                                        </form>
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-dark">
                                            <a class="nav-link text-white" href="patient.html">Verify</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                            data-bs-whatever="@mdo">Register As Medical Representative</button>


                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModal3Label"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModal3Label">Authentication Process</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <h2 class="fw-bold">Enter the confirmation code</h2>
                                            <p class="text-muted">Enter the confirmation code sent to n**ro*jh@gmail.com and
                                                follow the steps to
                                                complete the process</p>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Enter the code:</label>
                                                <input type="text" class="form-control" id="recipient-name" />
                                            </div>

                                        </form>
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-dark">
                                            <a class="nav-link text-white" href="medical-representative.html">Verify</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>




            </div>

        </div>
    );
};

export default Register;