'use client';

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import Modal from "./Modal";
import axios from "axios";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";


const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error('Aie quelque chose cloche !');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Bienvenue sur AirBnb"
                subtitle="Créer votre compte"
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="username"
                label="Nom d'utilisateur"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Mot de passe"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Inscription avec Google"
                icon={FcGoogle}
                onClick={() => {}}
            />
            <Button
                outline
                label="Inscription avec Facebook"
                icon={FaFacebook}
                onClick={() => {}}
            />
            <div
                className="
                    text-neutral-500 
                    text-center 
                    mt-4 
                    font-light
                "
            >
                <p>Déjà un compte ?
                    <span
                        onClick={registerModal.onClose}
                        className="
                            text-neutral-800
                            cursor-pointer 
                            hover:underline
                        "
                    > Connexion</span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Inscription"
            actionLabel="Continuer"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;